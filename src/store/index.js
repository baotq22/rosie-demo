import { create } from "zustand"

const useStore = create((set) => ({
    isShow: false,
    setIsShow: (isShow) => set({ isShow }),
    width: window.innerWidth,
    setWidth: (width) => set({ width })
}))

export default useStore