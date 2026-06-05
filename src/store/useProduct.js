import { create } from "zustand";
import {devtools} from 'zustand/middleware';

export const useProduct = create()(devtools((set) => ({
    searchValue: '',
    sortValue:'',
    currentPage: 1,
    limit: 12,
    offset: 0,
    setCurrentPage: (value) => set({currentPage: value}),
    setOffset: (value) => set({offset: value}),
    setSearchValue: (val) => set({searchValue:  val}),
    setSortValue: (val) => set({sortValue: val}),


})))