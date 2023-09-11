


class SupportService  {

    addComma(array:string[]) {
        if (array.length === 1) {
            return array
        }

        return array.map((item,i) => {
            return i !== array.length - 1 ? item + ', ':item
        })
    }
}



export default new SupportService()