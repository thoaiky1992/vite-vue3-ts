import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { i18nType } from '@/i18n';

export default function BootstrapVeeValidate(i18n: i18nType) {
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  configure({
    generateMessage: (context) => {
      return String(i18n.global.t(`validation.${context.rule?.name}`));
    }
  });
  defineRule('min', (value: any, [target]: any, context: any) => {
    return (
      value.length >= target ||
      String(i18n.global.t(`validation.${context.rule?.name}`, { length: target }))
    );
  });
}
