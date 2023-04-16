'use client';
import {useRouter} from "next/navigation";
import {ChangeEvent, FC, FormEvent, ReactNode, useState} from "react";

export default function Search() {

    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/${search}/`);
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    return (
        <form className='w-50 flex justify-center md:justify-between' onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleChange}
                   className='bg-white p-2 text-xl rounded-xl w-80' placeholder='search here'/>
            <button type='submit' className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>🚀</button>
        </form>
    )
}
