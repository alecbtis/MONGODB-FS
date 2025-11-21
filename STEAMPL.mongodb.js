use("steam");

db.user.insertMany([
{
Nombre: "USER1",
contraseña: "PW1"
},
{
Nombre: "USER2",
contraseña: "PW2"
},
{
Nombre: "USER3",
contraseña: "PW3"
},
{
Nombre: "USER4",
contraseña: "PW4"
},
{
Nombre: "USER5",
contraseña: "PW5"
},
{
Nombre: "USER6",
contraseña: "PW6"
},
{
Nombre: "USER7",
contraseña: "PW7"
},
{
Nombre: "USER8",
contraseña: "PW8"
},
{
Nombre: "USER9",
contraseña: "PW9"
},
{
Nombre: "USER10",
contraseña: "PW10"
}])

db.games.insertMany([
{
Nombre: "FALLOUT",
ID: "001"
},
{
Nombre: "RESIDENT EVIL 4",
ID: "002"
},
{
Nombre: "SLEEPING DOGS",
ID: "003"
},
{
Nombre: "DEVIL MAY CRY",
ID: "004"
},
{
Nombre: "METAL GEAR SOLID II: SONS OF LIBERTY",
ID: "005"
},
{
Nombre: "METAL SLUG X",
ID: "006"
},
{
Nombre: "EXPEDITION 33",
ID: "007"
},
{
Nombre: "DEATH STRANDING",
ID: "008"
},
{
Nombre: "DOOM ETERNAL",
ID: "009"
},
{
Nombre: "HALF-LIFE 2",
ID: "0010"
}])

db.awards.insertMany([
{
Nombre: "AW1",
ID: "001"
},
{
Nombre: "AW2",
ID: "002"
},
{
Nombre: "AW3",
ID: "003"
},
{
Nombre: "AW4",
ID: "004"
},
{
Nombre: "AW5",
ID: "005"
},
{
Nombre: "AW6",
ID: "006"
},
{
Nombre: "AW7",
ID: "007"
},
{
Nombre: "AW8",
ID: "008"
},
{
Nombre: "AW9",
ID: "009"
},
{
Nombre: "AW10",
ID: "0010"
}])

db.dlc.insertMany([
{
Nombre: "DLC1",
ID: "001"
},
{
Nombre: "DLC2",
ID: "002"
},
{
Nombre: "DLC3",
ID: "003"
},
{
Nombre: "DLC4",
ID: "004"
},
{
Nombre: "DLC5",
ID: "005"
},
{
Nombre: "DLC6",
ID: "006"
},
{
Nombre: "DLC7",
ID: "007"
},
{
Nombre: "DLC8",
ID: "008"
},
{
Nombre: "DLC9",
ID: "009"
},
{
Nombre: "DLC10",
ID: "0010"
}])

db.community.insertMany([
{
Nombre: "CM1",
ID: "001"
},
{
Nombre: "CM2",
ID: "002"
},
{
Nombre: "CM3",
ID: "003"
},
{
Nombre: "CM4",
ID: "004"
},
{
Nombre: "CM5",
ID: "005"
},
{
Nombre: "CM6",
ID: "006"
},
{
Nombre: "CM7",
ID: "007"
},
{
Nombre: "CM8",
ID: "008"
},
{
Nombre: "CM9",
ID: "009"
},
{
Nombre: "CM10",
ID: "0010"
}])


db.user.deleteOne({Nombre: "USER9"})
db.user.deleteOne({Nombre: "USER10"})
db.awards.deleteOne({Nombre: "AW9"})
db.awards.deleteOne({Nombre: "AW10"})
db.games.deleteOne({Nombre: "DOOM ETERNAL"})
db.games.deleteOne({Nombre: "HALF-LIFE 2 "})
db.community.deleteOne({Nombre: "CM9"})
db.community.deleteOne({Nombre: "CM10"})
db.dlc.deleteOne({Nombre: "DLC9"})
db.dlc.deleteOne({Nombre: "DLC10"})