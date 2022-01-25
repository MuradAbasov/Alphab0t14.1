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
	return `Edir @${sender.split("@")[0]} siz verilənlər bazasında qeydiyyatdan keçməmisiniz, zəhmət olmasa yazın ${prefix}verify\n\n\Siz həmçinin web api-dən doğrulama kodu göndərməklə qeydiyyatdan keçə bilərsiniz\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Edir ${pushname} siz artıq verilənlər bazasında qeydiyyatdan keçmisiniz`
	}
exports.enNum = () => {
 return `❌ Nömrələri düzgün daxil edin`
 }
exports.adminGc = () => {
 return `Siz admin olduğunuz üçün bot sizi sistemdən çıxarmayacaq`
 }
 exports.izinDt = () => {
 return `İcazə qəbul edildi`
 }
 exports.anjawaOn = (command) => {
	return `☑️ ${command} Aktiv edildi`
	}
exports.anjawaOff = (command) => {
	return `☑️ ${command} Deaktiv edildi`
	}
exports.anjawaUdhOn = (command) => {
	return `☑️ ${command} öncədən aktiv idi`
	}
exports.anjawaUdhOon = (command) => {
	return `Aktivləşdirmək üçün aktiv, söndürmək üçün isə off seçin`
	}
exports.onORoff = (command) => {
	return `Aktivləşdirmək üçün aktiv, söndürmək üçün isə off seçin`
	}
exports.gcOpen = (command) => {
	return `☑️ ${command} Qrup uğurla açıldı`
	}
exports.gcClose = (command) => {
	return `☑️ ${command} Qrup uğurla bağlandı`
	}
exports.nsfwmo= () => {
	return `Nsfw funksiyası aktivləşdirilməyib, onu aktivləşdirmək üçün bot sahibi ilə əlaqə saxlayın`
	}
exports.erorCode = () => {
 return `Daxil etdiyiniz kod səhvdir, yenidən yoxlayın\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Bu funksiyadan istifadə etmək üçün sahib ilə əlaqə saxlayın `
 }
 //vote
exports.noSesiVote = () => {
 	return`Səsvermə sessiyası yoxdur`
 }
exports.suksesDelVot = () => {
	return`Bu qrupda səsvermə sessiyası uğurla silinir`
	}
exports.adaVoting = () => {
	return`Bu qrupda səsvermə sessiyası davam edir`
	}
exports.caraVoting = (prefix, command) => {
    return`*Səsvermə*\n\n${prefix + command} @etiket hədəf | səbəb  | 1 (1 = 1 Dəqiqə)`
    }
exports.caraVot = () => {
 	return`Nömrəni sıraya daxil edin 3\nMisal: 1-9999\n1 = 1 Dəqiqə`
    }
//ttt
exports.noSesiTtt = () =>{
	return`Bu qrupda ticactoe seansı yoxdur`
	}
exports.suksesDelTtt = () =>{
	return`Bu qrupda tictactoe sessiyası uğurla silindi`
	}
//on & off
exports.ownerOff = () =>{
	return`Sahibim getdi`
	}
exports.ownerOn = () =>{
	return`Sahibim geri döndü`
	}
