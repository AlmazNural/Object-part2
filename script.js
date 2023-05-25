// 1. Вам дан обьект, с ключами herbivores, predators, All animals. 
//    Заполните значение ключа All animals всеми животными.

// let obj = {
//     herbivores: ["Заяц", "Корова", "Лошадь"],
//     predators: ["Волк", "Медведь", "Лунтик"], 
//     "All animals": []
// }
// obj["All animals"] = [...obj.herbivores, ...obj.predators]

// console.log(obj["All animals"]);


// 2. Вам дан обьект obj, напишите функцию которая удалит поля со 
//    значениями undefined и вывести в консоль обновленный обьект 

// let obj = {
//     id: 1,
//     title: "tuna sandwich",
//     subtitle: undefined,
//     price: "20$",
//     "new price": null,
//     description: "tuna sandwich best sandwich in the world",
//     "more info": undefined,
//     categories: null
// }
// const {subtitle: _, ["more info"]: __, ...newObj} = obj

// console.log(newObj);