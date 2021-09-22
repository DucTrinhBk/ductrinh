var Config = {


    ApiUrl: "https://tuanchau.cftsoft.com:1012/",
    ImgUrl: "https://tuanchau.cftsoft.com/",

    ContentTypeXForm: "application/x-www-form-urlencoded",
    ContentTypeJson: "application/json",
    Language: "vi",
    DefaultTimeout: 0,
    StatusActiveText: "Đang hoạt động",
    StatusInActiveText: "Ngừng hoạt động",
    thanhToanReturnUrl: window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/Account/ThongTinThanhToan",
    StatusUnknowText: "Chưa rõ",
    DefaultAva: "http://103.81.87.134:5010/FileAttach/api/20210203/210203145939-4e20622e-b0d1-4678-bda7-5dc5443c4447.png",
    TokenExpriseTime: 24
}

var Const = {
    ErrorCodeClient: 400,
    SuccessCode: 200,
    ErrorCodeServer: 500,

}


function GetLanguage() {
    var settings = {
        "url": Config.ApiUrl + "/api/ngon-ngu/danh-sach-ngon-ngu",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": Config.ContentTypeJson
        }
    };

    return $.ajax(settings);
}

function GetGender(id) {
    if (id === 1) {
        return '<span class="badge badge-info">Nam</span>';
    }
    else if (id === 0) {
        return '<span class="badge badge-warning">Nữ</span>';
    } else {
        return '<span class="badge badge-secondary">' + Config.StatusUnknowText + '</span>';
    }
}

function ChangeLanguage(code) {
    Config.Language = code
}

function CheckValidBothDate(checkin, checkout) {
    const datea = new Date(checkin);
    const dateb = new Date(checkout);
    const today = new Date(getDate());
    if (datea.getTime() < today.getTime() || dateb.getTime() < today.getTime()) {
        return 'Ngày checkin hoặc checkout không hợp lệ';
    }
    else if (datea.getTime() > dateb.getTime()) {
        return 'Ngày checkin không thể trước ngày checkout';
    }
    else return null;

}

function CheckValidDate(date) {
    const x = new Date(date);
    const today = new Date(getDate());
    if (x.getTime() < today.getTime()) {
        return 'Ngày checkin không hợp lệ';
    }
    else return null;
}

function GetRole(role) {
    if (role === 1) {
        return '<span class="badge badge-info">Người dùng</span>';
    }
    else if (role === 0) {
        return '<span class="badge badge-success">Quản trị</span>';
    } else {
        return '<span class="badge badge-secondary">' + Config.StatusUnknowText + '</span>';
    }
}

//function GetURL(code) {
//    if (code === "TC-KS") {
//        return '/Resort/ResortDetail';
//    }
//    else if (code === "TC-KVC") {
//        return '/VuiChoi/ThongTinKhuVuiChoi';
//    }
//    else if (code === "TC-TQV") {
//        return '/TauThamVinh/DatVeTauThamVinh';
//    }
//    else if (code === "TC-TT") {
//        return '/TrucThang/DatVeTrucThang';
//    }
//    else if (code === "TC-TPC") {
//        return '/ThuyThiCo/DatVeThuyPhiCo';
//    }
//    else if (code === "TC-PHA") {
//        return '/Pha/DatVePha';
//    }
//    else {
//        return '#';
//    }
//}

//function GetApprove(status) {
//    if (status === 1) {
//        return '<span class="badge badge-success">Đã duyệt</span>';
//    }
//    else if (status === 0) {
//        return '<span class="badge badge-warning">Chưa duyệt</span>';
//    }
//    else if (status === 2) {
//        return '<span class="badge badge-danger">Từ chối</span>';
//    } else {
//        return '<span class="badge badge-secondary">' + Config.StatusUnknowText + '</span>';
//    }
//}

//function GetAction(action) {
//    if (action === "add") {
//        return '<span class="badge badge-success">Thêm mới</span>';
//    }
//    else if (action === "edit") {
//        return '<span class="badge badge-warning">Chỉnh sửa</span>';
//    } else if (action === "del") {
//        return '<span class="badge badge-danger">Xoá</span>';
//    } else {
//        return '<span class="badge badge-secondary">' + Config.StatusUnknowText + '</span>';
//    }
//}

//function getDaysHtml() {
//    var html = "";
//    html += "<option value=''>-- Ngày --</option>";
//    for (var i = 1; i <= 31; i++) {
//        html += "<option value='" + i + "'>" + i + "</option>";
//    }

//    return html;
//}

//function getMonthsHtml() {
//    var html = "";
//    html += "<option value=''>-- Tháng --</option>";
//    for (var i = 1; i <= 12; i++) {
//        html += "<option value='" + i + "'>" + i + "</option>";
//    }

//    return html;
//}

function getYearsHtml() {
    var html = "";

    var d = new Date();
    var y = d.getFullYear();

    html += "<option value=''>-- Năm --</option>";
    for (var i = y; i >= 1700; i--) {
        html += "<option value='" + i + "'>" + i + "</option>";
    }

    return html;
}

function getFormattedDate(date) {
    var d = new Date(date)
    let year = d.getFullYear();
    let month = (1 + d.getMonth()).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');

    return day + '/' + month + '/' + year;
}

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    return yyyy + '-' + mm + '-' + dd;
}

function GetStatus(status) {
    if (status === 1) {
        return '<span class="badge badge-success">' + Config.StatusActiveText + '</span>';
    }
    else if (status === 0) {
        return '<span class="badge badge-danger">' + Config.StatusInActiveText + '</span>';
    } else {
        return '<span class="badge badge-secondary">' + Config.StatusUnknowText + '</span>';
    }
}

function RemoveNull(str) {
    return str.replace(new RegExp('null', 'g'), "");
}

function WriteCookie(key, value, hours) {
    var date = new Date();

    // Default at 365 days.
    hours = hours || 8;

    // Get unix milliseconds at current time plus number of days
    date.setTime(+ date + (hours * 3600000)); //60 * 60 * 1000

    window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

    return value;
};

function RemoveCookie(key) {
    window.document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
};

function ReadCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function RemoveAccents(str) {
    try {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    } catch (e) {
        console.log(e);
    }
}


function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

function convertoVND(number) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
}

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}

function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function makeStringShort(str, len) {
    var yourString = str; //replace with your string.
    var maxLength = len // maximum number of characters to extract

    //trim the string to the maximum length
    var trimmedString = yourString.substr(0, maxLength);

    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    return trimmedString + "...";
}