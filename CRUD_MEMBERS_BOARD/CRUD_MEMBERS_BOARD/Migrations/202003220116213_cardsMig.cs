namespace CRUD_MEMBERS_BOARD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class cardsMig : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.cards",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        title = c.String(),
                        comments = c.String(),
                        attachments = c.String(),
                        labels = c.String(),
                        dueDate = c.DateTime(nullable: false),
                        importantState = c.Int(nullable: false),
                        checklist = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.cards");
        }
    }
}
