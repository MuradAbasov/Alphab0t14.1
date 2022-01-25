/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.limit = (prefix) =>{
	return` ❗ Limitiniz bitdi, göndərin ${prefix}limiti yoxlamaq üçün limit`
}
exports.limitg= (prefix) =>{
	return` ❗ Oyun limitiniz bitdi, göndərin ${prefix}limiti yoxlamaq üçün limit`
}
exports.event = (prefix) =>{
	return` ❗Qrup hadisəsi aktivləşdirilməyib, əmri göndərin ${prefix}aktivləşdirmək üçün hadisə`
}
exports.wait = () => {
	return `🫂 Bir az gözlə...`
	}
exports.success = () => {
	return `Bitdi 🤓`
	}
exports.successBc = () => {
	return `Yayım Uğurlu ✅`
	}
exports.wrongFormat = () => {
	return `❌ Format səhvdir, menyuda yenidən yoxlamağa cəhd edin`
	}
exports.erorStik = () => {
	return `❌ Bu stiker deyil`
	}
exports.tagStik = () => {
	return `❌ Stikeri cavablandırın/etiket edin`
	}
exports.erorLink = () => {
	return `❌ Etibarsız keçid`
	}
exports.onlygc = () => {
	return `❌ Bu xüsusiyyət qrupa xasdır`
	}
exports.onlyOwner = () => {
	return `❌ Xüsusi Sahib Botu`
	}
exports.benned = () => {
	return `❌ Üzr istəyirik, nömrəniz bloklanıb`
	}
exports.onlygcAdmin = () => {
	return `❌ Yalnız qrup admini`
	}
exports.cariCecan = () => {
	return `Axtarmağa çalışıram 🫂`
	}
exports.cariCogan = () => {
	return `Şüar axtarır 🫂`
	}
exports.pesanBot = () => {
	return `❌ Botun mesajına cavab verin`
	}
exports.replyFoto = () => {
	return `❌ Fotoya cavab verin`
	}
exports.tagUser = () => {
	return `❌ Etiket @üzv`
	}
exports.noReply = () => {
	return `❌ Cavab verdiyiniz mesajda cavab yoxdur`
	}
exports.changeNmGc = () => {
	return `☑️ Qrup adının müvəffəqiyyətlə dəyişdirilməsi`
	}
exports.changeDeskGc = () => {
	return `☑️ qrup masası uğurla dəyişdirildi`
	}
exports.spam = (prefix, command) => {
	return `❌ Misal ${prefix + command} Mətin|Məbləğ`
	}
exports.tahta = (prefix, command) => {
	return `❌ Misal ${prefix + command} Abasov|Farz`
	}
exports.noteks = (prefix, command) => {
	return `❌ Misal ${prefix + command} Abasov`
	}
exports.botNotAdm = () => {
	return `Bu əmrdən istifadə etmək üçün botu admin edin❗`
	}
exports.tryAgain = () => {
	return `❌ Yenidən cəhd edin, uğursuz oldu :(`
	}
exports.anlinOn = () => {
	return `☑️ Antilink aktivləşdirildi `
	}
exports.anlinOff = () => {
	return `☑️ Antilink deaktiv edilib`
	}
exports.notregis = (prefix, sender) => {
	return `Edir @${sender.split("@")[0]} siz verilənlər bazasında qeydiyyatdan keçməmisiniz, zəhmət olmasa yazın ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `❎ Enter Numbers Correctly`
 }
exports.adminGc = () => {
 return `Because you are the admin so the bot will not log you out`
 }
 exports.izinDt = () => {
 return `Permission accepted`
 }
 exports.anjawaOn = (command) => {
	return `✅ ${command} Activated`
	}
exports.anjawaOff = (command) => {
	return `✅ ${command} Disabled`
	}
exports.anjawaUdhOn = (command) => {
	return `✅ ${command} been active before`
	}
exports.anjawaUdhOon = (command) => {
	return `Select on to activate, off to disable`
	}
exports.onORoff = (command) => {
	return `Select on to activate, off to disable`
	}
exports.gcOpen = (command) => {
	return `✅ ${command} Successfully opened group`
	}
exports.gcClose = (command) => {
	return `✅ ${command} Successfully Close group `
	}
exports.nsfwmo= () => {
	return `The nsfw feature has not been activated, contact the bot owner to activate it`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Contact the owner to use this feature`
 }
 //vote
exports.noSesiVote = () => {
 	return`No voting session`
 }
exports.suksesDelVot = () => {
	return`Successfully Deleting Voting Session In This Group`
	}
exports.adaVoting = () => {
	return`Voting Session In Progress In This Group`
	}
exports.caraVoting = (prefix, command) => {
    return`*Voting*\n\n${prefix + command} @tag target | reason  | 1 (1 = 1 Minute)`
    }
exports.caraVot = () => {
 	return`Enter number in line 3\nContoh: 1-9999\n1 = 1 Minute`
    }
//ttt
exports.noSesiTtt = () =>{
	return`There is no tictactoe session in this group`
	}
exports.suksesDelTtt = () =>{
	return`Successfully deleted tictactoe session in this group`
	}
//on & off
exports.ownerOff = () =>{
	return`My owner has been off`
	}
exports.ownerOn = () =>{
	return`My owner is back on`
	}
