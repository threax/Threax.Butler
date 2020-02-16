using Newtonsoft.Json;
using System;
using Threax.AspNetCore.Halcyon.Client;

namespace Butler.Client
{
    public class ButlerClientOptions
    {
        /// <summary>
        /// The url of the service.
        /// </summary>
        public string ServiceUrl { get; set; }
    }
}
