'use client';

import { useLocaleSwitch } from "@lib/hooks";

export const LocaleSwitch = () => {
    const handleLocaleSwitch = useLocaleSwitch();

    return (
        <div className="flex gap-2 w-full justify-center">
            <button onClick={() => handleLocaleSwitch('en')}>English</button>
            <button onClick={() => handleLocaleSwitch('lv')}>Latvian</button>
            <button onClick={() => handleLocaleSwitch('no')}>Norwegian</button>
        </div>
    )
}