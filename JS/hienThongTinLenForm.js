/**
 * function: Hiện thông tin lên form
 * Author: VuongDo
 * date: 15/11/2020
 * input: obj nhanVien
 * ouput: Hiển thị trên form
 */
function hienThongTinLenForm(NV){
    getELE("txtMaNV").setAttribute("disabled", true);
    getELE("txtMaNV").value = NV.maNV;
    getELE("txtTenNV").value = NV.hoTen;
    getELE("chucVu").value = NV.chucVu;
    getELE("txtLuongCoBan").value = NV.luongCoBan;
    getELE("txtGioLam").value = NV.gioLam;
}