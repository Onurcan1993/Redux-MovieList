export const SIRA_ARTTIR = 'SIRA_ARTTIR';
export const SIRA_AZALT="SIRA_AZALT";
export const ADD_MY_FAVORITE ="ADD_MY_FAVORİTE";
export const REMOVE_MY_LISTEM ="REMOVE_MY_LİSTEM";

export function siraArttir() {
  return { type: 'SIRA_ARTTIR' };
}

export function siraAzalt(){
    return {type:"SIRA_AZALT"};
}

export function myListem({sira,title}){

    return {type:"ADD_MY_FAVORİTE",payload:{sira,title}};
}

export function removeMyListem (title){
    return {type:"REMOVE_MY_LİSTEM",payload:title};
}
