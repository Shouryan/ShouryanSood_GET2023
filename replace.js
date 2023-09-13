let str="java is opensource language and javascript is scripting language. java is very user friendly and easy to use"
console.log(str.replace("Java","Python"));
console.log(str.replace(/java/g,"Python"));
console.log(str.replace(/java/gi,"Hello"));
console.log(str.replace(/is/gi,"Hello"));