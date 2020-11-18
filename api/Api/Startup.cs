using Api.Store;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            if (Configuration.GetSection("DbFileName").Exists())
            {
                services.AddTransient<IStore, FileDbStore>();
            }
            else
            {
                services.AddSingleton<IStore, CachStore>();
            }

            services.AddControllers();
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseCors(configurePolicy =>
            {
                // TODO: replace AnyOrigin by particular domain (Web UI)
                configurePolicy.AllowAnyOrigin();
                configurePolicy.AllowAnyHeader();
                configurePolicy.AllowAnyMethod();
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
