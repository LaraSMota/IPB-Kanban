﻿// <auto-generated />
using System;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200518205124_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Backend.Models.Board", b =>
                {
                    b.Property<int>("boardId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("board_id")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("background")
                        .HasColumnName("background")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(255)
                        .IsUnicode(false);

                    b.Property<string>("description")
                        .HasColumnName("description")
                        .HasColumnType("nvarchar(1000)")
                        .HasMaxLength(255)
                        .IsUnicode(false);

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnName("title")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.HasKey("boardId");

                    b.ToTable("Board");
                });

            modelBuilder.Entity("Backend.Models.Card", b =>
                {
                    b.Property<int>("cardId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("card_id")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("attachments")
                        .HasColumnName("attachments")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(255)
                        .IsUnicode(false);

                    b.Property<string>("checklist")
                        .HasColumnName("checklist")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(255)
                        .IsUnicode(false);

                    b.Property<int>("collumnId")
                        .HasColumnName("collumn_id")
                        .HasColumnType("int");

                    b.Property<string>("comments")
                        .HasColumnName("comments")
                        .HasColumnType("nvarchar(1000)")
                        .HasMaxLength(500)
                        .IsUnicode(false);

                    b.Property<string>("description")
                        .HasColumnName("description")
                        .HasColumnType("nvarchar(1000)")
                        .HasMaxLength(500)
                        .IsUnicode(false);

                    b.Property<DateTime?>("dueDate")
                        .HasColumnName("dueDate")
                        .HasColumnType("date");

                    b.Property<string>("labels")
                        .HasColumnName("labels")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(255)
                        .IsUnicode(false);

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnName("title")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(255)
                        .IsUnicode(false);

                    b.HasKey("cardId");

                    b.HasIndex("collumnId");

                    b.ToTable("Card");
                });

            modelBuilder.Entity("Backend.Models.Collumn", b =>
                {
                    b.Property<int>("collumnId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("collumn_id")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("boardId")
                        .HasColumnType("int");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnName("title")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.HasKey("collumnId");

                    b.HasIndex("boardId");

                    b.ToTable("Collumn");
                });

            modelBuilder.Entity("Backend.Models.User", b =>
                {
                    b.Property<int>("userId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("users_id")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnName("email")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.Property<string>("firstName")
                        .IsRequired()
                        .HasColumnName("firstName")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.Property<string>("lastName")
                        .IsRequired()
                        .HasColumnName("lastName")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.Property<string>("nickname")
                        .IsRequired()
                        .HasColumnName("nickname")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnName("password")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(50)
                        .IsUnicode(false);

                    b.HasKey("userId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Backend.Models.Card", b =>
                {
                    b.HasOne("Backend.Models.Collumn", "Collumn")
                        .WithMany("Card")
                        .HasForeignKey("collumnId")
                        .HasConstraintName("FK__CARD__collumn_id__2E1BDC42")
                        .IsRequired();
                });

            modelBuilder.Entity("Backend.Models.Collumn", b =>
                {
                    b.HasOne("Backend.Models.Board", "Board")
                        .WithMany("Collumn")
                        .HasForeignKey("boardId")
                        .HasConstraintName("FK__COLLUMN__board_i__2B3F6F97")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
