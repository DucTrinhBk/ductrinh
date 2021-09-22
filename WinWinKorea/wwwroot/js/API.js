function getHost() {
    var host = 'https://tuanchau.cftsoft.com:1012/';
    return host;
}

//$(document).ready(function () {
 
//});

var pageIndex = 1,
    pageSize = 20,
    count = 200;
getAllTruong();

$(".prev-btn").on("click", function () {
    if (pageIndex > 1) {
        pageIndex--;
        getAllTruong();
    }
    console.log("Prev Page: " + pageIndex);
});

$(".next-btn").on("click", function () {
    if (pageIndex * pageSize > count) {
        pageIndex++;
        getAllTruong();
    }
    console.log("Next Page: " + pageIndex);
});

function getAllTruong() {
    var search = $('#suggestBox').val();
    var quocGia = $('#khuvuc').val();
    var tag = $('#xeploai').val();
    var chuyenNganh = $('#chuyennganh').val();
    //get tất cả trường học
    var url = getHost() + 'api/tuyensinh/getAllTruongHoc';
    $.ajax({
        url: url,
        data: {
            TextSearch: search,
            MaQuocGia: quocGia,
            MaChuyenNganh: chuyenNganh,
            //Tag: tag,
            pageIndex: pageIndex,
            pageSize: pageSize

        },
        type: 'GET',
        traditional: true,
        headers: {
            "Authorization": "Bearer " + ReadCookie("token")
        },
        success: function (content) {
            count = content.data.count;
            console.log("day la count: "  + count);
            var html = "";
            $("#listSchool").html(html);
            for (var item of content.data.data) {
                html = `<div class="box-school mb-lg-5 mb-4">
                            <div class="box-school__img">
                                <a href="/thong-tin-truong-hoc/` + item.id + `">
                                    <img src=" `+ item.iconUrl + ` " alt="..."/>
                                </a>
                            </div>
                            <div class="box-school__content">
                                <a class="box-school__name truncate-h" data-line="1" href="/thong-tin-truong-hoc/` + item.id + `">` + item.ten + `</a>
                                <div class="flex">
                                    <div class="box-school__item"><img src="/img/logo-icon/clock.svg" alt="..." loading="lazy"/> ` + item.soTinDangTuyen + ` tin đang tuyển</div>
                                    <div class="box-school__item"><img src="/img/logo-icon/user.svg" alt="..." loading="lazy"/> ` + item.tongChiTieu + ` chỉ tiêu đang tuyển</div>
                                </div>
                                <p class="description truncate-h mt-lg-3 mt-2" data-line="3">
                                   ` + item.gioiThieu + `
                                </p>
                            </div>
                        </div>
                        `
                $("#listSchool").append(html);
            }
            $("#countResult").html(content.data.count);
        }
    });
}

function getDetailTruong(idTruong) {
    var settings = {
        "url": getHost() + "api/tuyensinh/getTruongHocChiTiet",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": Config.ContentTypeJson,
            "Authorization": "Bearer " + ReadCookie("token")
        },
        "data": {
            id: idTruong
        }
    };
    return $.ajax(settings);
}

function getDetailBaiGiang(idLesson) {
    var settings = {
        "url": getHost() + "api/baigiangonline/getBaiGiangChiTiet",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": Config.ContentTypeJson,
            "Authorization": "Bearer " + ReadCookie("token")
        },
        "data": {
            id: idLesson
        }
    };
    return $.ajax(settings);
}

function getChuyenNganh(){
    var url = getHost() + 'api/tienich/getAllFilter';
    $.ajax({
        url: url,
        data:{
            maParent: 'ChuyenNganh'
        },
        type: "GET",
        traditional: true,
        headers: {
            "Authorization": "Bearer " + ReadCookie("token")
        },
        success: function(content){
            for(const item of content.data){
                $('.drop-chuyen-nganh').append('<option value="' + item.ma + '">' + item.ten + '</option>');
            }
        }
    });
}

function getQuocGia(){
    var url = getHost() + 'api/tienich/getAllFilter';
    $.ajax({
        url: url,
        data:{
            maParent: 'MaQuocGia'
        },
        type: "GET",
        traditional: true,
        headers: {
            "Authorization": "Bearer " + ReadCookie("token")
        },
        success: function(content){
            for(const item of content.data){
                $('.drop-khu-vuc').append('<option value="' + item.ma + '">' + item.ten + '</option>');
            }
        }
    });
}

function getXepLoai(){
    var url = getHost() + 'api/tienich/getAllFilter';
    $.ajax({
        url: url,
        data:{
            maParent: 'XepLoai'
        },
        type: "GET",
        traditional: true,
        headers: {
            "Authorization": "Bearer " + ReadCookie("token")
        },
        success: function(content){
            for(const item of content.data){
                $('.drop-xep-loai').append('<option value="' + item.ma + '">' + item.ten + '</option>');
            }
        }
    });
}

function getAllLesson() {
    var chuyenNganh = $('#chuyennganh').val();
    console.log(chuyenNganh);
    //get tất cả bài giảng
    var url = getHost() + 'api/baigiangonline/getAllBaiGiang';
    $.ajax({
        url: url,
        data: {
            pageSize: 10,
            pageIndex: 1,
            Tag: chuyenNganh,
        },
        type: 'GET',
        traditional: true,
        headers: {
            "Authorization": "Bearer " + ReadCookie("token")
        },
        success: function (content) {
            console.log(content.data.data);
            var html = "";
            $("#lesson-online").html(html);
            for(var item of content.data.data){
                html = `
                        <div class="col-sm-12 col-md-6 col-lg-6 mb-lg-6 mb-4">
                        <div class="box-video">
                        <div class="box-video__img">
                            <a href="/thong-tin-bai-giang/`+ item.id + `"><img class="img-fluid" src="` + item.anhUrl + `" alt="..."/></a>
                        </div>
                        <div class="box-video__content">
                            <a class="box-video__name" href="/thong-tin-bai-giang/`+ item.id + `">
                            <span class="truncate-h" data-line="1"> ` + item.ten + ` </span>
                            </a>
                            <div class="box-video__view flex-item my-lg-4 my-3">
                            <div><i class="fal fa-heart mr-1"></i> ` + item.soLuotThich + ` lượt thích</div>
                            <div><i class="fal fa-eye mr-1"></i>` + item.soLuotXem + ` lượt xem</div>
                            </div>
                            <p class="description truncate-h pt-1" data-line="3">
                                `+ item.moTa + `
                            </p>
                            <a href="/thong-tin-bai-giang/`+ item.id + `" class="btn mt-lg-4 mt-3 pl-0">Xem thêm</a>
                        </div>
                        </div>
                    </div>
                `
                $("#lesson-online").append(html);
            }
        }
    });
}