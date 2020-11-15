// Tên biến
// var manv, hoTen, chucVu, luongCoBan, gioLam
// var dsnv = new DanhSachNhanVien();
// var validation = new Validation();

//Hàm rút gọn cú pháp
function getELE(id) {
    return document.getElementById(id);
}


//Hàm xóa nhân viên
function xoaNhanVien() {

}

// Hàm sửa nhân viên
function suaNhanVien(){

}

var danhSachNhanVien = new DanhSachNV();
/**
 * Function: tạo nhân viên khi click nút thêm
 * Author: Vuong Do
 * Date: 15/11/2020
 * Event: click Button Thêm
 * out: add NHân Viên vào danh sách nhân viên
 */
getELE("btnThemNV").addEventListener("click", function(){
    var NV  = layThongTinTuForm();
    console.log(NV);
    var isValid = true;
    let validationCheckForm = new ValidationCheckForm();
    // debugger;
    // kiểm tra mã nhân viên : nhân viên không được rỗng và trùng 
    isValid &= validationCheckForm.kiemTraRong(NV.maNV,"tbMaNV", "Không được để trống" ) && validationCheckForm.kiemTraMaNV(NV.maNV, danhSachNhanVien.mangNV,"tbMaNV", "mã  nhân viên bị trùng")    
    // isValid mới   = isValid cũ & validationCheckForm
    // kiểm tra tên 
    isValid &= validationCheckForm.kiemTraRong(NV.hoTen,"tbTen", "Không được để trống" )  && validationCheckForm.kiemTraTen(NV.hoTen,"tbTen", "Tên không được chứa số" ) 
    // kiểm tra chức vụ 
    isValid &= validationCheckForm.kiemTraChucVu("chucVu","tbChucVu", "Không được để trống")
    //Kiểm tra Lương bản
    isValid &= validationCheckForm.kiemTraRong(NV.luongCoBan,"tbLuongCB", "Không được để trống" )  && validationCheckForm.kiemTraLuongCB(NV.luongCoBan,"tbLuongCB", "Lương Không hợp lệ")
    //kiểm tra giờ làm
    isValid &= validationCheckForm.kiemTraRong(NV.gioLam,"tbGioLam", "Không được để trống" )  && validationCheckForm.kiemTraGio(NV.gioLam,"tbGioLam", "Giờ Làm Không hợp lệ")
    // tất cả thông tin nhân viên đều hợp lệ 
    if(isValid){
        // add Nhan Vien Vao Danh Sach Nhan Vien 
        danhSachNhanVien.themNV(NV);
    }

})