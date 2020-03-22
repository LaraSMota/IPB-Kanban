namespace CRUD_MEMBERS_BOARD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class boardMig : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.boards",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        title = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.boards");
        }
    }
}
