/**
 * description: OOP đối tượng nhân viên
 * author: Vuong Do
 * date: 14/11/2020
 */
function NhanVien(maNV, hoTen, chucVu, luongCoBan, gioLam ){
    // props
    this.maNV = maNV;
    this.hoTen = hoTen;
    this.chucVu = chucVu;
    this.luongCoBan = luongCoBan;
    this.gioLam = gioLam;

    this.tinhLuong = function(){
        var tongLuong = 0
        switch(this.chucVu) {
            case "Giám đốc":
              tongLuong = this.luongCoBan * 3;
              console.log("GD"+tongLuong);
              break;
            case "Trưởng Phòng":
              tongLuong = this.luongCoBan * 2;
              console.log("TP"+tongLuong);
              break;
            case "Nhân viên":
              tongLuong = this.luongCoBan;
              console.log("NV"+tongLuong);
              break;
            default :
            console.log("Không tính được lương")
          }
        return tongLuong;
    }
    this.xepLoai = function(){
        if(this.gioLam > 120){
            return "Xuất Sắc"
        }else if(this.gioLam > 100){
            return "Giỏi"
        }else if(this.gioLam > 80){
            return "Khá"
        }else if(this.gioLam > 50){
            return "Trung Bình"
        }else if(this.gioLam <= 50){
            return "Yếu"
        }
        else{
            return "Không xếp Loại"
        }
    }


}
//TEST  OOP NHan Vien
//  var NV1 = new NhanVien(123, "victor", "Trưởng Phòng", 3000, 150);
// // console.log(NV1);
// console.log(NV1.tinhLuong("chucVu"));
// console.log(NV1.xepLoai());
