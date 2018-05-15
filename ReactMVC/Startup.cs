using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactMVC.Startup))]
namespace ReactMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
