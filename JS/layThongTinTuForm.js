/**
 * Func1: tạo hàm lấy thông tin từ form
 * author: Vuong Do
 * date: 14/11/2020
 */
//Hàm rút gọn cú pháp
function getELE(id) {
    return document.getElementById(id);
}
function layThongTinTuForm(){
    var maNV = getELE("txtMaNV").value;
    var hoTen = getELE("txtTenNV").value;
    var chucvu = getELE("chucVu").value;
    var luongCoBan = getELE("txtLuongCoBan").value;
    var gioLam = getELE("txtGioLam").value;

    // console.log(maNV, hoTenNV, email, password, ngaylam, chucvuNV)
    
    // thể hiện của đối tượng nhân viên
    let NV = new NhanVien(maNV, hoTen, chucvu, luongCoBan, gioLam);
    // console.log(NV);
    return NV
}
