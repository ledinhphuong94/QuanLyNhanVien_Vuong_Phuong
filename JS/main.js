// Tên biến
// var manv, hoTen, chucVu, luongCoBan, gioLam
// var dsnv = new DanhSachNhanVien();
// var validation = new Validation();

//Hàm rút gọn cú pháp
function getELE(id) {
    return document.getElementById(id);
}

// Lưu danh sách xuống locaStorage
function setLocalStorage(mangNV){
    // localStorage.setItem("DSNV",JSON.)
}



//Hàm xóa nhân viên
function xoaNhanVien() {

}

// Hàm sửa nhân viên
function suaNhanVien(){

}
/**
 * Function: Reset Form
 * Author: VuongDo
 * Date: 15/11/2020
 */
function resetForm(){
    getELE("txtMaNV").value = '';
    getELE("txtTenNV").value = '';
    getELE("chucVu").selectedIndex = 0;
    getELE("txtLuongCoBan").value = '';
    getELE("txtGioLam").value = '';

}
/**
 * Tao danh sach nhan vien
 */
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
        // console.log(danhSachNhanVien);
        hienThiDanhSach(danhSachNhanVien.mangNV)
        resetForm();
    }

})
/**
 * Function: hiển thị danh sách trên table
 * Author: Vuong Do
 * Date: 15/11/2020
 * Event: click Button Thêm
 * out: hiển thị danh sách
 */
function hienThiDanhSach(DS){
    let content = "";
    DS.map(nv => {
        content  += `
        <tr>
             <td>${nv.maNV}</td>
             <td>${nv.hoTen}</td>
             <td>${nv.chucVu}</td>
             <td>${nv.luongCoBan}</td>
             <td>${nv.gioLam}</td>
             <td>${nv.xepLoai()}</td>
             <td>${nv.tinhLuong()}</td>
             <td>
                <button class="btn btn-danger" onClick=xoaNV("${nv.maNV}")>Xóa</button>
                <button class="btn btn-success" onClick=capNhatNhanVien("${nv.maNV}") data-toggle="modal" data-target="#myModal">Cập Nhật</button>
             </td>
        </tr>
        ` 
     })
     getELE("tbodyNhanVien").innerHTML = content;
}
/**
 * Function: update nhân viên khi click nút update
 * Author: Vuong Do
 * Date: 15/11/2020
 * Event: click Button Cập Nhật
 * out: Cập Nhật Nhân Viên vào danh sách nhân viên
 */
function  capNhatNhanVien(id){
    // console.log(id);
    // xử lý button 
    getELE("btnThemNV").style.display = "none"; 
    getELE("btnCapNhatNV").style.display = "inline-block";
    var index = danhSachNhanVien.timIndexNV(id);
    var NV;
    // hiển thị thông tin lên modal 
    if(index !== -1){
        NV = danhSachNhanVien.mangNV[index];
        // console.log(DSNV.DSNV[index]);
        hienThongTinLenForm(NV);

    }   
}
// cập nhật thông tin 
getELE("btnCapNhatNV").addEventListener("click", function(){
    // cập nhât 
    danhSachNhanVien.capNhatNV(layThongTinTuForm());
    // hiển thị lại     
    hienThiDanhSach(danhSachNhanVien.mangNV);
    //Reset
    getELE("btnThemNV").style.display = "inline-block"; 
    getELE("btnCapNhatNV").style.display = "none";
    resetForm();
})
