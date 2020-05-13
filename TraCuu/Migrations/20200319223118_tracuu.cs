using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TraCuu.Migrations
{
    public partial class tracuu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ChiNhanh",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ChiNhanhID = table.Column<int>(nullable: false),
                    TenChiNhanh = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiNhanh", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ChiTietTKCKH",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ChiNhanhID = table.Column<decimal>(type: "decimal(4, 0)", nullable: false),
                    CMND = table.Column<string>(type: "varchar(20)", nullable: false),
                    MaKhachHang = table.Column<string>(type: "varchar(20)", nullable: false),
                    ToChuc = table.Column<bool>(nullable: false),
                    NgayGui = table.Column<DateTime>(nullable: false),
                    SoTienGui = table.Column<decimal>(type: "decimal(14, 0)", nullable: false),
                    ThoiHan = table.Column<decimal>(type: "decimal(4, 0)", nullable: false),
                    LaiSuat = table.Column<decimal>(type: "decimal(4, 2)", nullable: false),
                    NgayTaiTuc = table.Column<DateTime>(nullable: false),
                    SoDu = table.Column<decimal>(type: "decimal(14, 0)", nullable: false),
                    NgayDenHan = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietTKCKH", x => x.Id);
                });
            migrationBuilder.CreateTable(
               name: "ThongKe",
               columns: table => new
               {
                   Id = table.Column<int>(nullable: false)
                       .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                   Online = table.Column<int>(nullable: false),
                   TruyCap = table.Column<int>(nullable: false),
                   XemTietKiem = table.Column<int>(nullable: true)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_ThongKe", x => x.Id);
               });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChiNhanh");

            migrationBuilder.DropTable(
                name: "ChiTietTKCKH");
            migrationBuilder.DropTable(
               name: "ThongKe");
        }
    }
}
