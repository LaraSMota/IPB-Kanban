using System.Web;
using System.Web.Mvc;

namespace ASI_ACTIVITY2_TEAM9
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
