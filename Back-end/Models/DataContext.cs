using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Backend.Models
{
    public partial class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Card> Cards { get; set; }
        public virtual DbSet<Board> Boards { get; set; }
        public virtual DbSet<Collumn> Collumns { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //if (!optionsBuilder.IsConfigured)
            //{
            //    optionsBuilder.UseSqlServer("Data Source=LAPTOP-C3PU0C9M;Initial Catalog=Kanban;Integrated Security=True");
            //}
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Board>(entity =>
            {
                entity.ToTable("Board");

                entity.Property(e => e.boardId).HasColumnName("board_id");

                entity.Property(e => e.background)
                    .HasColumnName("background")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.description)
                    .HasColumnName("description")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.title)
                    .IsRequired()
                    .HasColumnName("title")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Card>(entity =>
            {
                entity.ToTable("Card");

                entity.Property(e => e.cardId).HasColumnName("card_id");

                entity.Property(e => e.attachments)
                    .HasColumnName("attachments")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.checklist)
                    .HasColumnName("checklist")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.collumnId).HasColumnName("collumn_id");

                entity.Property(e => e.comments)
                    .HasColumnName("comments")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.description)
                    .HasColumnName("description")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.dueDate)
                    .HasColumnName("dueDate")
                    .HasColumnType("date");

                entity.Property(e => e.labels)
                    .HasColumnName("labels")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.title)
                    .IsRequired()
                    .HasColumnName("title")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Collumn)
                    .WithMany(p => p.Card)
                    .HasForeignKey(d => d.collumnId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CARD__collumn_id__2E1BDC42");
            });

            modelBuilder.Entity<Collumn>(entity =>
            {
                entity.ToTable("Collumn");

                entity.Property(e => e.collumnId).HasColumnName("collumn_id");

                entity.Property(e => e.title)
                    .IsRequired()
                    .HasColumnName("title")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Board)
                    .WithMany(p => p.Collumn)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__COLLUMN__board_i__2B3F6F97");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.userId).HasColumnName("users_id");

                entity.Property(e => e.email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.firstName)
                    .IsRequired()
                    .HasColumnName("firstName")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.lastName)
                    .IsRequired()
                    .HasColumnName("lastName")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.nickname)
                    .IsRequired()
                    .HasColumnName("nickname")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
