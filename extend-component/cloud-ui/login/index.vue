<template>
<div :class="$style.root" style="height:317px;box-shadow: 0 0 10px 0 rgba(80, 90, 109, 0.16)">
    <u-linear-layout direction="vertical" gap="large" style="padding-bottom:35px;">
        <!-- tabs（主登录） tabs-->
        <u-tabs v-model="account.LoginType" appear="line">
            <u-tab
                v-for="tab in tabs"
                :key="tab.value"
                :title="tab.title"
                :value="tab.value"
            ></u-tab>
        </u-tabs>

    </u-linear-layout>
    <u-linear-layout type="flex" justify="center" style="margin-bottom:24px">
        <u-input
            style="width:330px;height:40px"
            size="large"
            name="account"
            v-model="account.AccountId"
            placeholder="请输入账号"
            maxlength="128"
            maxlength-message="账号最多输入128个字符"
            prefix="user"
            clearable
        >
            <span name="prefix" :class="$style.prefix">
                <icon-custom name="user"></icon-custom>
            </span>
        </u-input>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="center" style="margin-bottom:30px">
        <u-input
            style="width:330px;height:40px"
            size="large"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            v-model="account.AccountPassword"
            placeholder="请输入密码"
            maxlength="128"
            maxlength-message="密码最多输入128个字符"
            prefix="lock"

        >
            <span name="prefix" :class="$style.prefix">
                <icon-custom name="lock"></icon-custom>
            </span>
            <span
                name="suffix"
                :class="$style.suffix"
                @click="showPassword = !showPassword"
            >
                <icon-custom
                    :name="showPassword ? 'eye-close' : 'eye'"
                ></icon-custom>
            </span>
        </u-input>
    </u-linear-layout>
    <u-linear-layout direction="vertical" gap="small">
        <u-button
            size="large"
                color="primary"
                display="block"
            >登&nbsp;录</u-button>
    </u-linear-layout>
</div>

</template>
<script>
import iconCustom from './icon-custom.vue';
import './iconfont.js';
export default {
    data() {
        return {
            showPassword: false,
            account: {
                LoginType: 'Normal',
                AccountId: '',
                AccountPassword: '',
                isplugin: false,
            },

            tabs: [{
                title: '普通登录',
                value: 'Normal',
            }],
        }
    }
}
</script>

<style module>
    .root {
        width: 410px;
        height: 393px;
        margin: auto;
        padding-top: 21px;
        background: #fff;
        box-shadow: 0 0 10px 0 rgba(80, 90, 109, 0.16);
        border-radius: 8px;
    }
    .root [class^=i-ico_iconsvg__]{
        opacity: 0;
    }
    .root [class^=lcap-login_icon-custom_icon__] {
        width: 16px!important;
        height: 16px!important;
    }
    .root [class^=icon-custom_icon__] {
        width: 16px!important;
        height: 16px!important;
    }
    .root [class^=u-tabs_body__] {
        padding-top: 10px;
        margin-top: 0;
    }
    .root [class^=u-tabs_nav__] {
       height:38px!important;
    }
    .root [class^=u-tabs_item__] {
        color:#ccc;
        width:50%;
        line-height:36px;
    }
    .root [class^=u-tabs_item__][selected] {
        color:#337EFF;
    }
    .root [class^=u-tabs_title__] {
        font-size:16px;
        font-weight: 500;
        display: flex;
        justify-content: center;
    }
    .root [class^=u-button__] {
       border-radius: 4px;
    }
    .root [class^=u-input_input__] {
        padding-left: 37px!important;
    }
    .root [class^=s-empty_empty__] {
        display: none;
    }
    .dividerbox{
        color:#ccc;
        font-size:14px;
        display: flex;
        align-items: center;
        margin-bottom: 24px!important;
    }
    .divider  {
       width: 140px;
       height: 1px;
       background:#ccc;
    }
    .linkbox{
        width:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 14px;
        font-size: 14px;
        height: 14px;
    }
    .loading {
        width: 100%;
        height: 100%;
    }
    
    .form {
        width: 330px;
        margin: 0 auto;
        padding: 0;
        text-align: left;
    }
    
    .prefix {
        color: #ccc;
        font-size: 18px;
        cursor: pointer;
        position: absolute;
        left: 12px;
    }
    
    .suffix {
        color: #ccc;
        font-size: 18px;
        cursor: pointer;
        font-size: 20px;
        position: absolute;
        right: 12px;
    }
    
    .error {
        color: var(--brand-error);
        display: inline-block;
        max-width: 99px;
    }
    
    .link {
        display: inline-block;
        min-width: 60px;
        color:#337EFF;
    }
    
    .tips {
        font-size: var(--font-size-small);
        color: var(--color-lighter);
    }
    
    .links {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .loading {
        width: 80px;
        height: 20px;
        position: fixed;
        left: 50%;
        top: 20%;
        margin-left: -40px;
        text-align: center;
    }
    .loading span {
        display: inline-block;
        width: 8px;
        margin-right: 8px;
        height: 100%;
        border-radius: 4px;
        background: var(--brand-primary);
        animation: load 1.04s ease infinite;
    }
    @keyframes load {
        0%,
        100% {
            height: 20px;
            background: var(--brand-primary-light);
        }
        50% {
            height: 30px;
            margin-top: -10px;
            background: var(--brand-primary-lightest);
        }
    }
    .loading span:nth-child(2) {
        animation-delay: 0.13s;
    }
    .loading span:nth-child(3) {
        animation-delay: 0.26s;
    }
    .loading span:nth-child(4) {
        animation-delay: 0.39s;
    }
    .loading span:nth-child(5) {
        animation-delay: 0.52s;
    }
    .myiframe {
        display: block;
        background: #000;
        border: none;
        height: 100vh;
        width: 100vw;
    }
    </style>
    