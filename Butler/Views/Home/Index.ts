import * as standardCrudPage from 'htmlrapier.widgets/src/StandardCrudPage';
import * as startup from 'Client/Libs/startup';
import * as deepLink from 'htmlrapier/src/deeplink';
import { AppCommandSetCrudInjector } from 'Client/Libs/AppCommandSetCrudInjector';
import { CrudTableRowControllerExtensions, CrudTableRowController } from 'htmlrapier.widgets/src/CrudTableRow';
import * as controller from 'htmlrapier/src/controller';
import * as client from 'Client/Libs/ServiceClient';

class CommandSetRow extends CrudTableRowControllerExtensions {
    public static get InjectorArgs(): controller.InjectableArgs {
        return [];
    }

    private data: client.AppCommandSetResult;

    public rowConstructed(row: CrudTableRowController, bindings: controller.BindingCollection, data: any): void {
        bindings.setListener(this);
        this.data = data;
    }



    public async execute(evt: Event): Promise<void> {
        await this.data.execute();
    }
}

var injector = AppCommandSetCrudInjector;

var builder = startup.createBuilder();
builder.Services.addTransient(CrudTableRowControllerExtensions, CommandSetRow);
deepLink.addServices(builder.Services);
standardCrudPage.addServices(builder, injector);
standardCrudPage.createControllers(builder, new standardCrudPage.Settings());