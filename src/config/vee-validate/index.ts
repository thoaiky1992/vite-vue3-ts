import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { i18nType } from '@/config/i18n';

export default function BootstrapVeeValidate(i18n: i18nType) {
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  configure({
    generateMessage: (context) => {
      return String(i18n.global.t(`validation.${context.rule?.name}`));
    },
    validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: true // controls if `update:modelValue` events should trigger validation with `handleChange` handler
  });
  defineRule('min', (value: any, [target]: any, context: any) => {
    return (
      value.length >= target ||
      String(i18n.global.t(`validation.${context.rule?.name}`, { length: target }))
    );
  });
}
