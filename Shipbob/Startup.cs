using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Shipbob.Startup))]
namespace Shipbob
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
