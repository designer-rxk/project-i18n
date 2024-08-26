import { LocaleSwitch } from '@components';
import { NextLink } from '@lib/i18n';
import { useTranslations } from 'next-intl';
 
export default function Page() {
  const t = useTranslations('aboutUs');

  return (
     <div className='w-full flex flex-col gap-10 items-center py-10'>
      <NextLink href='/'>{t('link')}</NextLink>
      <LocaleSwitch />
    </div>
  )
}