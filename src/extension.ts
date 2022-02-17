import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.languages.registerFoldingRangeProvider("console-tree", {
        provideFoldingRanges(document, _context, _token) {
            const res: vscode.FoldingRange[] = [];
            const starts: number[] = [];

            for (let i = 0; i < document.lineCount; i += 1) {
                const line = document.lineAt(i).text;
                const match = /^((?:│   )*)((?:└   )*└|├)── /.exec(line);

                if (match === null) {
                    continue;
                }

                const level = match[1].length / 4;

                if (match[2] === "├") {
                    while (starts.length < level) {
                        starts.push(-1);
                    }
                    if (starts.length === level) {
                        starts.push(i - 1);
                    }
                } else {
                    if (starts.length <= level) {
                        res.push(new vscode.FoldingRange(i - 1, i));
                    }
                    while (starts.length > level) {
                        const s = starts.pop()!;
                        if (s !== -1) {
                            res.push(new vscode.FoldingRange(s, i));
                        }
                    }
                }
            }

            return res;
        },
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
