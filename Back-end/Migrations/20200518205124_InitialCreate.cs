using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Board",
                columns: table => new
                {
                    board_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 50, nullable: false),
                    description = table.Column<string>(type: "nvarchar(1000)", unicode: false, maxLength: 255, nullable: true),
                    background = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Board", x => x.board_id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    users_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 50, nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 50, nullable: false),
                    email = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 50, nullable: false),
                    nickname = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 50, nullable: false),
                    password = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.users_id);
                });

            migrationBuilder.CreateTable(
                name: "Collumn",
                columns: table => new
                {
                    collumn_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 50, nullable: false),
                    boardId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Collumn", x => x.collumn_id);
                    table.ForeignKey(
                        name: "FK__COLLUMN__board_i__2B3F6F97",
                        column: x => x.boardId,
                        principalTable: "Board",
                        principalColumn: "board_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Card",
                columns: table => new
                {
                    card_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 255, nullable: false),
                    comments = table.Column<string>(type: "nvarchar(1000)", unicode: false, maxLength: 500, nullable: true),
                    attachments = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 255, nullable: true),
                    labels = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 255, nullable: true),
                    dueDate = table.Column<DateTime>(type: "date", nullable: true),
                    description = table.Column<string>(type: "nvarchar(1000)", unicode: false, maxLength: 500, nullable: true),
                    checklist = table.Column<string>(type: "nvarchar(100)", unicode: false, maxLength: 255, nullable: true),
                    collumn_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Card", x => x.card_id);
                    table.ForeignKey(
                        name: "FK__CARD__collumn_id__2E1BDC42",
                        column: x => x.collumn_id,
                        principalTable: "Collumn",
                        principalColumn: "collumn_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Card_collumn_id",
                table: "Card",
                column: "collumn_id");

            migrationBuilder.CreateIndex(
                name: "IX_Collumn_boardId",
                table: "Collumn",
                column: "boardId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Card");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Collumn");

            migrationBuilder.DropTable(
                name: "Board");
        }
    }
}
