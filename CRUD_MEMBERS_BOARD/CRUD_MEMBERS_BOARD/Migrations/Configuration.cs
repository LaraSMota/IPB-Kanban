namespace CRUD_MEMBERS_BOARD.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CRUD_MEMBERS_BOARD.Models.context>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "CRUD_MEMBERS_BOARD.Models.context";
        }

        protected override void Seed(CRUD_MEMBERS_BOARD.Models.context context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.
        }
    }
}
