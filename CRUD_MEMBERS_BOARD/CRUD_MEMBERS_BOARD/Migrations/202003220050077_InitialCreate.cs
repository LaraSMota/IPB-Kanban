namespace CRUD_MEMBERS_BOARD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.columns",
                c => new
                    {
                        id_column = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        BoardId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.id_column);
            
            CreateTable(
                "dbo.members",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        Age = c.Int(nullable: false),
                        Name = c.String(),
                        Email = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.members");
            DropTable("dbo.columns");
        }
    }
}
