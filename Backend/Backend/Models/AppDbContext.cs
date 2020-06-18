using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class AppDbContext : DbContext
    {
        public AppDbContext()
        {
        }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Board> Board { get; set; }
        public virtual DbSet<Card> Card { get; set; }
        public virtual DbSet<Collumn> Collumn { get; set; }
        public virtual DbSet<Member> Member { get; set; }
        public virtual DbSet<Team> Team { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<UsersBoard> UsersBoard { get; set; }
        public virtual DbSet<UsersCard> UsersCard { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //if (!optionsBuilder.IsConfigured)
            //{
            //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            //              optionsBuilder.UseSqlServer("Data Source=LAPTOP-C3PU0C9M;Initial Catalog=ipbCardBe;Integrated Security=True");
            //        }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Board>(entity =>
            {
                entity.ToTable("board");

                entity.Property(e => e.BoardId).HasColumnName("board_id");

                entity.Property(e => e.Background)
                    .HasColumnName("background")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.TeamId).HasColumnName("team_id");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnName("title")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.Team)
                    .WithMany(p => p.Board)
                    .HasForeignKey(d => d.TeamId)
                    .HasConstraintName("FK__board__team_id__2C3393D0");
            });

            modelBuilder.Entity<Card>(entity =>
            {
                entity.ToTable("card");

                entity.Property(e => e.CardId).HasColumnName("card_id");

                entity.Property(e => e.Attachments)
                    .HasColumnName("attachments")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Checklist)
                    .HasColumnName("checklist")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CollumnId).HasColumnName("collumn_id");

                entity.Property(e => e.Comments)
                    .HasColumnName("comments")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.DueDate)
                    .HasColumnName("dueDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Lables)
                    .HasColumnName("lables")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Position).HasColumnName("position");

                entity.Property(e => e.Title)
                    .HasColumnName("title")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.Collumn)
                    .WithMany(p => p.Card)
                    .HasForeignKey(d => d.CollumnId)
                    .HasConstraintName("FK__card__collumn_id__3F466844");
            });

            modelBuilder.Entity<Collumn>(entity =>
            {
                entity.ToTable("collumn");

                entity.Property(e => e.CollumnId).HasColumnName("collumn_id");

                entity.Property(e => e.BoardId).HasColumnName("board_id");

                entity.Property(e => e.Position).HasColumnName("position");

                entity.Property(e => e.Title)
                    .HasColumnName("title")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.Board)
                    .WithMany(p => p.Collumn)
                    .HasForeignKey(d => d.BoardId)
                    .HasConstraintName("FK__collumn__board_i__3C69FB99");
            });

            modelBuilder.Entity<Member>(entity =>
            {
                entity.ToTable("member");

                entity.Property(e => e.MemberId).HasColumnName("member_id");

                entity.Property(e => e.PermitionLevel).HasColumnName("permitionLevel");

                entity.Property(e => e.TeamId).HasColumnName("team_id");

                entity.Property(e => e.UsersId).HasColumnName("users_id");

                entity.HasOne(d => d.Team)
                    .WithMany(p => p.Member)
                    .HasForeignKey(d => d.TeamId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__member__team_id__29572725");

                entity.HasOne(d => d.Users)
                    .WithMany(p => p.Member)
                    .HasForeignKey(d => d.UsersId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__member__users_id__286302EC");
            });

            modelBuilder.Entity<Team>(entity =>
            {
                entity.ToTable("team");

                entity.Property(e => e.TeamId).HasColumnName("team_id");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnName("title")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("users");

                entity.Property(e => e.UsersId).HasColumnName("users_id");

                entity.Property(e => e.BeNotified)
                    .HasColumnName("beNotified")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("firstName")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("lastName")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Nickname)
                    .IsRequired()
                    .HasColumnName("nickname")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Picture)
                    .HasColumnName("picture")
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UsersBoard>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("users_board");

                entity.Property(e => e.BoardId).HasColumnName("board_id");

                entity.Property(e => e.UsersId).HasColumnName("users_id");

                entity.HasOne(d => d.Board)
                    .WithMany()
                    .HasForeignKey(d => d.BoardId)
                    .HasConstraintName("FK__users_boa__board__398D8EEE");

                entity.HasOne(d => d.Users)
                    .WithMany()
                    .HasForeignKey(d => d.UsersId)
                    .HasConstraintName("FK__users_boa__users__38996AB5");
            });

            modelBuilder.Entity<UsersCard>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("users_card");

                entity.Property(e => e.CardId).HasColumnName("card_id");

                entity.Property(e => e.UsersId).HasColumnName("users_id");

                entity.HasOne(d => d.Card)
                    .WithMany()
                    .HasForeignKey(d => d.CardId)
                    .HasConstraintName("FK__users_car__card___412EB0B6");

                entity.HasOne(d => d.Users)
                    .WithMany()
                    .HasForeignKey(d => d.UsersId)
                    .HasConstraintName("FK__users_car__users__4222D4EF");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
