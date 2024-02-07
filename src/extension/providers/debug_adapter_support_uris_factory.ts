import * as vs from "vscode";

export class DartDebugAdapterSupportsUrisFactory implements vs.DebugAdapterTrackerFactory {
	createDebugAdapterTracker(session: vs.DebugSession): vs.DebugAdapterTracker {
		return new DartDebugAdapterSupportsUris();
	}
}

class DartDebugAdapterSupportsUris implements vs.DebugAdapterTracker {
	onWillReceiveMessage(message: any): void {
		if (message?.command === "initialize" && message.arguments) {
			message.arguments.supportsDartUris = true;
		}
	}
}
