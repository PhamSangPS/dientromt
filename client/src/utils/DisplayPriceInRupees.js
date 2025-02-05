export const DisplayPriceInRupees = (price)=>{
    return new Intl.NumberFormat('it-IT',{
        style : 'currency',
        currency : 'VND'
    }).format(price)
}
