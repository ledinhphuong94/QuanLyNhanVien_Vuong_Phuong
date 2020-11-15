var dsnv = new DanhSachNV();

// Lấy dữ liệu từ local storage và hiển thị
if(getLocalStorage()){
    // mảng X lấy lên từ local store ko chứa function
    var mangX = getLocalStorage();

    // Tạo 1 mảng tạm mới để lấy mạng mảng có full function
    var dsTam = new DanhSachNV();

    for(var i=0; i<mangX.length;i++){
        var nvTam = new NhanVien(mangX[i].maNV, mangX[i].hoTen, mangX[i].chucVu,mangX[i].luongCoBan, mangX[i].gioLam)

        dsTam.themNV(nvTam);
    }
    dsnv.hienThiDS(dsTam.mangNV);

    // gán mảng tạm vào mảng tổng
    dsnv.mangNV = dsTam.mangNV;
};

// Lưu danh sách xuống locaStorage
function setLocalStorage(mangNV){
    localStorage.setItem("DSNV",JSON.stringify(mangNV));
}
// Lấy danh sách lên từ localStorage
function getLocalStorage(){
    return JSON.parse(localStorage.getItem("DSNV")); 
    // dsnv.hienThiDS(arr);
}

// ========= Thêm, xóa, sửa search ===========

// Thêm nhân viên + xét hợp lệ
getELE("add-btn").addEventListener("click",function(){
    
    // Lấy thông tin và Validate thông tin nhân viên
    var nv = layThongTinTuForm();
    var isValid = false;
    var validate = new ValidationCheckForm();
    // Check mã
    isValid = validate.kiemTraRong(nv.maNV,"tb-maNV","Mã không được để trống") && validate.kiemTraMaNV(nv.maNV,dsnv.mangNV,"tb-maNV","Mã không được trùng");

    // Check Tên
    isValid &= validate.kiemTraRong(nv.hoTen,"tb-tenNV","Tên không được để trống") && validate.kiemTraTen(nv.hoTen,"tb-tenNV","Tên không hợp lệ!")

    // Check chức vụ
    isValid &= validate.kiemTraChucVu("chucVu","tb-chucVu","Phải chọn một trong các chức vụ bên dưới")

    // Check lương cơ bản
    isValid &= validate.kiemTraRong(nv.luongCoBan,"tb-luongCB","Lương không được để trống")

    // Check giờ làm
    isValid &= validate.kiemTraRong(nv.gioLam,"tb-gioLam","Giờ làm không được để trống")

    if(isValid){
        // Thêm nv vào mảng
        dsnv.themNV(nv);
        // Hiển thị danh sách
        dsnv.hienThiDS(dsnv.mangNV);
        // Lưu vào local storage       
        setLocalStorage(dsnv.mangNV);

    }
    
})

//Hàm xóa nhân viên
// Xóa nhân viên
    // Input: maNV
    // Output: xóa ra khỏi mảng NV
function xoaNhanVien(maNV) {
    // Xóa nhân viên
    dsnv.xoaNV(maNV);   
    // Hiển thị lại DS
    dsnv.hienThiDS(dsnv.mangNV)
    // Lưu lại vào local storage
    setLocalStorage(dsnv.mangNV)

}

// Hàm sửa nhân viên
// 1. Lấy thông tin từ mảng và truyền lên POP-UP form
function suaNhanVien(maNV){
    
    var index = dsnv.timIndextheoMa(maNV);
    
    getELE("upd-maNV").value = dsnv.mangNV[index].maNV;
    getELE("upd-maNV").setAttribute("disabled",false);

    getELE("upd-hoTen").value = dsnv.mangNV[index].hoTen;

    getELE("upd-chucVu").value = dsnv.mangNV[index].chucVu;

    getELE("upd-luongCB").value = dsnv.mangNV[index].luongCoBan;

    getELE("upd-gioLam").value = dsnv.mangNV[index].gioLam;
}

// 2. Xét hợp lệ + Cập nhật
/* Input: maNV
    // Output: bảng thông tin NV
    //  Mã NV ko đc sửa
    //  Xét hợp lệ các thông tin đã sửa
    // Lấy thông tin obj nv mới đã sửa gán lại vô obj nv cũ
    // Cập nhật mảng lại */
getELE("btn-capNhatNV").addEventListener('click',function(){
    
    var nv = layThongTinTuForm2();
    var isValid = false;
    var validate = new ValidationCheckForm();

    // Check Tên
    isValid = validate.kiemTraRong(nv.hoTen,"tb-upd-hoTen","Tên không được để trống") && validate.kiemTraTen(nv.hoTen,"tb-upd-hoTen","Tên không hợp lệ!")

    // Check chức vụ
    isValid &= validate.kiemTraChucVu("upd-chucVu","tb-upd-chucVu","Phải chọn một trong các chức vụ bên dưới")

    // Check lương cơ bản
    isValid &= validate.kiemTraRong(nv.luongCoBan,"tb-upd-luongCB","Lương không được để trống")

    // Check giờ làm
    isValid &= validate.kiemTraRong(nv.gioLam,"tb-upd-gioLam","Giờ làm không được để trống")

    if(isValid){
        // Cập nhật
        dsnv.capNhatNV(nv.maNV,nv)
        // Hiển thị
        dsnv.hienThiDS(dsnv.mangNV)
        // Lưu về local store
        setLocalStorage(dsnv.mangNV)
    }

})


getELE("searchName").addEventListener('keyup',function(){
    var search = getELE("searchName").value;
    var mangKQ = dsnv.timKiemNV(search);

    if(search){
        dsnv.hienThiDS(mangKQ);
    }else{
        dsnv.hienThiDS(dsnv.mangNV);
    }
})