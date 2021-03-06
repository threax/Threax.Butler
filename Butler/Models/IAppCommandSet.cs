using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Halcyon.HAL.Attributes;
using Threax.AspNetCore.Halcyon.Ext;
using Threax.AspNetCore.Models;

namespace Butler.Models 
{
    public partial interface IAppCommandSet 
    {
        String Name { get; set; }

        String VoicePrompt { get; set; }

        String Response { get; set; }

        String Key { get; set; }

        KeyModifier Modifier { get; set; }

        Guid AppCommandId { get; set; }

    }

    public partial interface IAppCommandSet_Json
    {
        String Json { get; set; }

    }

    public partial interface IAppCommandSetId
    {
        Guid AppCommandSetId { get; set; }
    }    

    public partial interface IAppCommandSetQuery
    {
        Guid? AppCommandSetId { get; set; }

    }
}