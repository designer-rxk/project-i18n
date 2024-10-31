import { LocaleSwitch } from '@components';
import { LocalizedLink } from '@lib/i18n';
import { useTranslations } from 'next-intl';
 
export default function Page() {
  const t = useTranslations('aboutUs');

  return (
     <div className='w-full flex flex-col gap-10 items-center py-10'>
      <LocalizedLink href='/'>{t('link')}</LocalizedLink>
      <LocaleSwitch />
    </div>
  )
}