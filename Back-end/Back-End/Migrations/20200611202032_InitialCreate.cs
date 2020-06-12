using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Back_End.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "team",
                columns: table => new
                {
                    team_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(unicode: false, maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_team", x => x.team_id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    users_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(unicode: false, maxLength: 100, nullable: false),
                    lastName = table.Column<string>(unicode: false, maxLength: 200, nullable: false),
                    email = table.Column<string>(unicode: false, maxLength: 200, nullable: false),
                    nickname = table.Column<string>(unicode: false, maxLength: 100, nullable: false),
                    password = table.Column<string>(unicode: false, maxLength: 100, nullable: false),
                    picture = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    beNotified = table.Column<string>(unicode: false, maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.users_id);
                });

            migrationBuilder.CreateTable(
                name: "board",
                columns: table => new
                {
                    board_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(unicode: false, maxLength: 200, nullable: false),
                    description = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    background = table.Column<string>(unicode: false, maxLength: 200, nullable: true),
                    team_id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_board", x => x.board_id);
                    table.ForeignKey(
                        name: "FK__board__team_id__2C3393D0",
                        column: x => x.team_id,
                        principalTable: "team",
                        principalColumn: "team_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "member",
                columns: table => new
                {
                    member_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    permitionLevel = table.Column<int>(nullable: false),
                    users_id = table.Column<int>(nullable: false),
                    team_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_member", x => x.member_id);
                    table.ForeignKey(
                        name: "FK__member__team_id__29572725",
                        column: x => x.team_id,
                        principalTable: "team",
                        principalColumn: "team_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__member__users_id__286302EC",
                        column: x => x.users_id,
                        principalTable: "users",
                        principalColumn: "users_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "collumn",
                columns: table => new
                {
                    collumn_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(unicode: false, maxLength: 200, nullable: true),
                    board_id = table.Column<int>(nullable: true),
                    position = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_collumn", x => x.collumn_id);
                    table.ForeignKey(
                        name: "FK__collumn__board_i__3C69FB99",
                        column: x => x.board_id,
                        principalTable: "board",
                        principalColumn: "board_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "users_board",
                columns: table => new
                {
                    users_id = table.Column<int>(nullable: true),
                    board_id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK__users_boa__board__398D8EEE",
                        column: x => x.board_id,
                        principalTable: "board",
                        principalColumn: "board_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__users_boa__users__38996AB5",
                        column: x => x.users_id,
                        principalTable: "users",
                        principalColumn: "users_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "card",
                columns: table => new
                {
                    card_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(unicode: false, maxLength: 200, nullable: true),
                    comments = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    attachments = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    lables = table.Column<string>(unicode: false, maxLength: 200, nullable: true),
                    dueDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    description = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    checklist = table.Column<string>(unicode: false, maxLength: 500, nullable: true),
                    collumn_id = table.Column<int>(nullable: true),
                    position = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_card", x => x.card_id);
                    table.ForeignKey(
                        name: "FK__card__collumn_id__3F466844",
                        column: x => x.collumn_id,
                        principalTable: "collumn",
                        principalColumn: "collumn_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "users_card",
                columns: table => new
                {
                    card_id = table.Column<int>(nullable: true),
                    users_id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK__users_car__card___412EB0B6",
                        column: x => x.card_id,
                        principalTable: "card",
                        principalColumn: "card_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__users_car__users__4222D4EF",
                        column: x => x.users_id,
                        principalTable: "users",
                        principalColumn: "users_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_board_team_id",
                table: "board",
                column: "team_id");

            migrationBuilder.CreateIndex(
                name: "IX_card_collumn_id",
                table: "card",
                column: "collumn_id");

            migrationBuilder.CreateIndex(
                name: "IX_collumn_board_id",
                table: "collumn",
                column: "board_id");

            migrationBuilder.CreateIndex(
                name: "IX_member_team_id",
                table: "member",
                column: "team_id");

            migrationBuilder.CreateIndex(
                name: "IX_member_users_id",
                table: "member",
                column: "users_id");

            migrationBuilder.CreateIndex(
                name: "IX_users_board_board_id",
                table: "users_board",
                column: "board_id");

            migrationBuilder.CreateIndex(
                name: "IX_users_board_users_id",
                table: "users_board",
                column: "users_id");

            migrationBuilder.CreateIndex(
                name: "IX_users_card_card_id",
                table: "users_card",
                column: "card_id");

            migrationBuilder.CreateIndex(
                name: "IX_users_card_users_id",
                table: "users_card",
                column: "users_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "member");

            migrationBuilder.DropTable(
                name: "users_board");

            migrationBuilder.DropTable(
                name: "users_card");

            migrationBuilder.DropTable(
                name: "card");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "collumn");

            migrationBuilder.DropTable(
                name: "board");

            migrationBuilder.DropTable(
                name: "team");
        }
    }
}
