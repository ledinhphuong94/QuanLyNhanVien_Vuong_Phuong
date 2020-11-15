/**
 * Func1: tạo hàm lấy thông tin từ form
 * author: Vuong Do
 * date: 14/11/2020
 */
//Hàm rút gọn cú pháp
function getELE(id) {
    return document.getElementById(id);
}

// Lấy thông tin từ form thêm
function layThongTinTuForm(){
    var maNV = getELE("txtMaNV").value;
    var hoTen = getELE("txtTenNV").value;
    var chucvu = getELE("chucVu").value;
    var luongCoBan = getELE("txtLuongCoBan").value;
    var gioLam = getELE("txtGioLam").value;
      
    // thể hiện của đối tượng nhân viên
    let NV = new NhanVien(maNV, hoTen, chucvu, luongCoBan, gioLam);
    // console.log(NV);
    return NV;
}

// Lấy thông tin từ POP UP form sửa
function layThongTinTuForm2(){
    var maNV = getELE("upd-maNV").value;
    var hoTen = getELE("upd-hoTen").value;
    var chucvu = getELE("upd-chucVu").value;
    var luongCoBan = getELE("upd-luongCB").value;
    var gioLam = getELE("upd-gioLam").value;
      
    // thể hiện của đối tượng nhân viên
    let NV = new NhanVien(maNV, hoTen, chucvu, luongCoBan, gioLam);
    // console.log(NV);
    return NV;
}
