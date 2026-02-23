const formatNumber = (num: number) => {
    if (!num) {
        return {
            toPrice: () => "",
            pad: ""
        }
    }

    return { 
        toPrice: () => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        pad: (size: number) => {
            if(num === 0) return '00';
            let ret = num.toString();
            while(ret.length < size) ret = '0' + ret;
            return ret;
        }
    }
}

export default formatNumber;