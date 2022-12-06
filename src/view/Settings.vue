<template>
  <div>
    <PageIntro>Настройки</PageIntro>
    <Container>
      <div class="settings-section">

        <SettingSubsection heading="Прочие настройки">
          <div class="settings-section__field">
            <label class="input-field__label caption">Часовой пояс</label>
            <Dropdown>
              <template #title>
                {{ timeZone[user.timezone] }}
              </template>
              <template #list>
                <div v-for="[key, value] in Object.entries(timeZone)"
                     :key="key"
                     class="dropdown__list-item"
                     :class="{'dropdown__list-item--active' : key === user.timezone}"
                     @click="setTimeZone(key)">{{value}}
                </div>
              </template>
            </Dropdown>
          </div>
          <div class="settings-section__field settings__tooltip">
            <Checkbox
                title="Автоматически переходить к новым объявлениям"
                :value="user.locklentaupdate"
                :checkedItems="user.locklentaupdate"
                @change="setLockLentaUpdate"
            />
            <Tooltip tooltipText="Лента будет автоматически обновляться 1 раз в 3 секунды"/>
          </div>
          <div class="settings-section__bottom">
            <MyButton @click="setUser(myUserId, user)">Сохранить</MyButton>
          </div>
        </SettingSubsection>

        <SettingSubsection
            heading="Оповещения о новых подборках"
            postEntry="Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей подборки."
            headerSubCaption="Уведомления"
            bodySubCaption="Уведомления"
        >
          <div class="settings-section__notifications">
            <div class="settings-section__field is-flex">
              <Radio title="Выкл" value="-1" :checkedItems="user.sendMethod" @change="setSendMethod" name="sendMethod"/>
            </div>
            <div class="settings-section__field is-flex">
              <Radio title="Email" value="1" :checkedItems="user.sendMethod" @change="setSendMethod" name="sendMethod"/>
              <ParamEdit :paramText="user.email">
                <MyInput v-model="user.email"/>
              </ParamEdit>
            </div>
            <div class="settings-section__field is-flex">
              <Radio title="Telegram ID" value="2" :checkedItems="user.sendMethod" @change="setSendMethod" name="sendMethod"/>
              <ParamEdit :paramText="user.telegramChat">
                <MyInput v-model="user.telegramChat"/>
              </ParamEdit>
            </div>
          </div>
        </SettingSubsection>

        <SettingSubsection heading="Учётная запись">
          <MyInput v-model="user.companyname" labelName="Компания" readonly="readonly"/>
          <MyInput v-model="user.login" labelName="Логин" readonly="readonly" />
          <MyInput v-model="user.phone" labelName="Номер телефона"/>
          <MyInput v-model="user.fname" labelName="Имя"/>
          <MyInput v-model="user.lname" labelName="Фамилия" info="* Не обязательно"/>
        </SettingSubsection>

        <SettingSubsection
            heading="Звонок через SIP"
            postEntry="Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров."
        >
          <Switcher
              :value="Number(user.calltype)"
              :checkedItems="Number(user.calltype)"
              @change="setCallType"
          />
        </SettingSubsection>
      </div>
    </Container>
  </div>
</template>

<script>

import PageIntro from "../components/UI/PageIntro";
import Container from "../components/UI/Container";
import MyInput from "../components/UI/MyInput";
import SettingSubsection from "../components/UI/SettingSubsection";
import MyButton from "../components/UI/MyButton";
import Checkbox from "../components/UI/Checkbox";
import Radio from "../components/UI/Radio";
import ParamEdit from "../components/UI/ParamEdit";
import Switcher from "../components/UI/Switcher";

export default {
  components: { Switcher, ParamEdit, Radio, Checkbox, MyButton, SettingSubsection, MyInput, Container, PageIntro},
  data() {
    return {
      myUserId: '1908365',
      user: {},
      // Изначально считал, что за изменение часового пояса отвечает timezonestring, а не timezone.
      // и ключом были названия городов на латинице. Возможно, массив объектов был бы лучшим решением
      timeZone: {
        [-1]:'Калининград',
        0: 'Москва',
        1: 'Самара',
        2: 'Екатеринбург',
        3: 'Омск',
        4: 'Красноярск',
        5: 'Иркутск',
        6: 'Якутск',
        7: 'Владивосток',
        8: 'Магадан',
        9: 'Камчатка',
      },
    }
  },
  methods: {
    postLogin() {
      this.$api.Events.login(
          {
            "login": "9523524317",
            "password": "7532066182",
            "fromuser": 0
          }
      ).then((data) => {
        this.loginData = data.data
      })
    },
    getUser(userId) {
    this.$api.Events.getUser(userId)
        .then((data) => {
          this.user = data.data
        })
    },
    setUser(userId, profileModel) {
      this.$api.Events.setUser(userId, profileModel)
    },
    setCallType(value) {
      this.user.calltype = Number(value)
    },
    setLockLentaUpdate (value) {
      this.user.setLockLentaUpdate = value
    },
    setSendMethod (value) {
      this.user.sendMethod = value
    },
    setTimeZone (value) {
      console.log(value)
      this.user.timezone = value
    }
  },
  mounted() {
    this.getUser(this.myUserId)
  },
  watch: {
    user: {
      handler() {
        this.setUser(this.myUserId, this.user)
      },
      deep: true
    }
  }
}
</script>


<style lang="scss">

.settings-section {
  margin-bottom: 5rem
}

.settings-section.is-mob {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.settings-section.is-mob .ads-filter__col {
  max-width: 100%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%
}

.settings-section.is-mob .multiselect__input {
  min-height: 4.5rem;
  padding: 1.3rem 4rem 1.3rem 1rem;
  font-size: 1.4rem
}

.settings-section.is-mob .multiselect.is-sm .multiselect__header:after {
  top: 19px
}

.settings-section.is-mob input {
  min-height: 4.5rem;
  padding: 1.3rem 4rem 1.3rem 1rem;
  font-size: 1.4rem
}

.settings-section.is-mob .form-controls__caption {
  width: 100%;
  padding: 1.4rem 2rem;
  opacity: .8;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.1
}

.settings-section.is-mob .ads-filter__fields:last-child {
  margin-bottom: 2.5rem
}

@media(min-width: 768px) {
  .settings-section {
    margin-bottom: 8rem
  }
}

@media(min-width: 1200px) {
  .settings-section {
    margin-bottom: 12rem
  }
}

.settings-section__subsection:not(:last-child) {
  margin-bottom: 2rem
}

@media(min-width: 768px) {
  .settings-section__subsection:not(:last-child) {
    margin-bottom: 4rem
  }
}

.settings-section .wide-section {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start
}

.settings-section .wide-section__header {
  margin-bottom: 1.5rem
}

@media(min-width: 768px) {
  .settings-section .wide-section__header {
    margin-bottom: 0
  }
}

@media(max-width: 767px) {
  .settings-section .wide-section__header.is-mobile-hidden {
    display: none
  }
}

.settings-section .wide-section__header.is-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.settings-section .wide-section__heading {
  margin-bottom: 0
}

@media(min-width: 576px) {
  .settings-section .wide-section__body {
    max-width: 49rem
  }
}

.settings-section__switcher {
  margin-left: 1rem
}

.settings-section__notifications .settings-section__field {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

@media(min-width: 768px) {
  .settings-section__notifications .settings-section__field:not(:last-child) {
    border-bottom: .1rem solid #e1e1e3;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem
  }
}

@media(min-width: 768px) {
  .settings-section__notifications .settings-section__radio {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 12rem;
    -moz-box-flex: 0;
    -ms-flex: 0 0 12rem;
    flex: 0 0 12rem;
    max-width: 12rem;
    margin-right: 1rem
  }
  .settings-section__notifications .settings-section__param-edit {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1
  }
}

@media(min-width: 576px) {
  .settings-section__fields {
    max-width: 37rem
  }
}

@media(min-width: 768px) {
  .settings-section__field-zone {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex
  }
  .settings-section__field-zone label {
    margin-bottom: 0;
    margin-top: .4rem;
    margin-right: 2.5rem;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px
  }
}

.settings-section__field:not(:last-child) {
  margin-bottom: 2rem
}

.settings-section__field .radio-label__main {
  font-size: 1.4rem
}

.settings-section__field .input-field__label {
  font-size: 1.4rem;
  font-weight: 600
}

@media(min-width: 768px) {
  .settings-section__field {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex
  }
  .settings-section__field .input-field__main {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1
  }
  .settings-section__field .input-field__label {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 12rem;
    -moz-box-flex: 0;
    -ms-flex: 0 0 12rem;
    flex: 0 0 12rem;
    max-width: 12rem;
    margin-right: 1rem;
    margin-bottom: 0;
    margin-top: .6rem;
    font-weight: 500
  }
  .settings-section__field .input-field__input {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1
  }
  .settings-section__field .form-select {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  .settings-section__field .form-select .caption {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 12rem;
    -moz-box-flex: 0;
    -ms-flex: 0 0 12rem;
    flex: 0 0 12rem;
    max-width: 12rem;
    margin-right: 1rem;
    margin-bottom: 0
  }
  .settings-section__field .form-select .multiselect__main {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1
  }
}

.settings-section__field .select {
  width: 100%
}

@media(min-width: 768px) {
  .settings-section__field .select {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex
  }
  .settings-section__field .select .select__label {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 12rem;
    -moz-box-flex: 0;
    -ms-flex: 0 0 12rem;
    flex: 0 0 12rem;
    max-width: 12rem;
    margin-right: 1rem;
    margin-bottom: 0;
    margin-top: .6rem
  }
}

.settings-section__field.is-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.settings-section__bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: .1rem solid #e1e1e3
}

.settings-section__subcaption {
  margin-bottom: 2rem
}

@media(max-width: 767px) {
  .settings-section__subcaption.is-mobile-hidden {
    display: none
  }
}

@media(min-width: 768px) {
  .settings-section__subcaption.is-desktop-hidden {
    display: none
  }
}

.settings-section__call-field {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 1rem
}

.settings-section__call-field, .settings-section__current-param {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.settings-section__current-param {
  font-size: 1.3rem;
  color: #000;
  font-weight: 500
}

@media(min-width: 768px) {
  .settings-section__current-param {
    font-size: 1.4rem;
    font-weight: 400
  }
}

.settings-section__current-param-edit {
  color: #2dc574;
  cursor: pointer
}

.settings-section__current-param-edit:hover {
  color: #26a763
}

.settings-section__current-param-edit-icon {
  fill: currentColor;
  width: 2.2rem;
  height: 2.2rem;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
  margin-left: .5rem
}

.settings-section__info {
  font-size: 1.2rem;
  color: #a3a3a3;
  margin-top: .5rem;
  display: block
}

.settings-section .post-entry {
  font-size: 1.3rem;
  font-weight: 500
}

@media(min-width: 768px) {
  .settings-section .post-entry {
    font-size: 1.4rem;
    font-weight: 400
  }
}

.settings-section .post-entry .is-muted {
  color: #686869
}

.settings-section .post-entry + .settings-section__fields {
  margin-top: 2rem
}

.settings-section .input {
  padding: .8rem 1rem;
  font-size: 1.4rem;
  font-weight: 500
}

@media(min-width: 768px) {
  .settings-section .input {
    font-weight: 400
  }
}

.settings__tooltip {
  display: flex;
  justify-content: space-between;
}

</style>