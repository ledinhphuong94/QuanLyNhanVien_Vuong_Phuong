function DanhSachNV(){
    this.mangNV = [];

    // ====Thêm NV ======
    // input: Obj NhanVien
    // Output: thêm vào mảng NV

    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    // ======Xóa nhân viên=====
    // Input: maNV
    // Output: xóa ra khỏi mảng NV
    this.xoaNV = function(maNV){
        var index = this.timIndextheoMa(maNV);
        this.mangNV.splice(index,1);
    }

    // =======Sửa nhân viên=====
    // Input: maNV
    // Output: bảng thông tin NV
    //  Mã NV ko đc sửa
    //  Xét hợp lệ các thông tin đã sửa
    // Lấy thông tin obj nv mới đã sửa gán lại vô obj nv cũ
    // Cập nhật mảng lại
    this.capNhatNV = function(maNV,mangMoi){
        var index = this.timIndextheoMa(maNV);
        dsnv.mangNV[index] = mangMoi;
    }

    // ===== Tìm nhân viên =====
    // Input: tên nhân viên/ mã NV
    // tìm trong mảng và in ra
    // chuyển về chữ thường
    //  xóa bỏ khoảng khống
    this.timKiemNV = function(ma){
        let maLowCase = ma.toLowerCase().trim();
        const mangTimKiem = this.mangNV.filter((item,index) => {
            let hoTenLowCase = item.hoTen.toLowerCase().trim();
            let maNVLowCase = item.maNV.toLowerCase().trim();
            let loaiNVLowCase = item.xepLoai().toLowerCase().trim();

            return (hoTenLowCase.indexOf(maLowCase) >= 0 || maNVLowCase.indexOf(maLowCase) >= 0 || loaiNVLowCase.indexOf(maLowCase) >= 0) 

        })

        return mangTimKiem;
    }

    // Tìm index nhân viên theo Mã NV
    this.timIndextheoMa = function(maNV){
        var id;
        this.mangNV.map(function(value,index){
            if(value.maNV === maNV){
                id = index;
            }
        })
        return id;
    }
  

    // Hiển thị danh sách
    // Input: mảng NV
    // Output: hiển thị lên html
  
    this.hienThiDS = function(mangX){
        var tbody = getELE("tbodyNhanVien");
        var content ="";

        for(var i=0 ; i<mangX.length; i++){
            content += `
            <tr>
                <td>${mangX[i].maNV}</td>
                <td>${mangX[i].hoTen}</td>
                <td>${mangX[i].chucVu}</td>
                <td>${mangX[i].luongCoBan}</td>
                <td>${mangX[i].gioLam}</td>
                <td>${mangX[i].xepLoai()}</td>
                <td>${mangX[i].tinhLuong()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${mangX[i].maNV}')">Xóa</button>

                    <button class="btn btn-info" onclick="suaNhanVien('${mangX[i].maNV}')" data-toggle="modal" data-target="#popUpSuaNV">Sửa</button>
                </td>           
            </tr>
            `
        }

        tbody.innerHTML = content;   
    }   
}