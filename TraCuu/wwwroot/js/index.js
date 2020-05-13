var productController = function () {
    this.initialize = function (chinhanhid, cmnd, makhachhang, macapcha) {
       
       // registerEvents(chinhanhid, cmnd, makhachhang, macapcha);
        registerEvents1(macapcha);
    }
    var registerEvents = function (chinhanhid, cmnd, makhachhang, macapcha) {     
        
        $.ajax({
            type: 'GET',
            data: {
                chinhanhid: chinhanhid,
                cmnd: cmnd,
                makhachhang: makhachhang,
            },
            dateType: 'json',
            url: '/ChiTietTKCKH/status',
            success: function (res) {
                 window.location.href = "ChiTietTKCKH";
                if (res.Success) {

                }
                //else {

                //}
            }
        })
       
    }
    var registerEvents1 = function (macapcha) {

        $.ajax({
            type: 'POST',
            data: {
                CaptchaCode: macapcha,               
            },
            dateType: 'json',
            url: '/Home/Login',
            success: function (res) {
                
                if (res.Success==true) {
                    window.location.href = "ChiTietTKCKH";
                }
                else {
                    window.location.href = "ChiNhanh";
                }
            }
        })

    }
    function loadCategories() {
        $.ajax({
            type: 'GET',
            url: '/Home/GetAllCategories',
            dataType: 'json',
            success: function (response) {
                var render = "<option value=''>--Select category--</option>";
                $.each(response, function (i, item) {
                    render += "<option value='" + item.Id + "'>" + item.ChiNhanhID + "</option>"
                });
                $('#ddlCategorySearch').html(render);
            },
            error: function (status) {
                console.log(status);
                tedu.notify('Cannot loading product category data', 'error');
            }
        });
    }
    
    var bangke = function (chinhanhid) {       
        $.ajax({
            
            type: 'GET',
            data: {
                chinhanhid: chinhanhid,               
            },
            dateType: 'json',
            url: '/ChiTietTKCKH/status',            
            success: function (res) {               
                
               // window.location.href = "ChiTietTKCKH/Index";
               
                if (res.Success) {                 
                   
                }
                //else {
                    
                //}
            }
        })
    }
}