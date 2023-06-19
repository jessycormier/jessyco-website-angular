import { Component } from '@angular/core';

type Todo = {
	icon?: string;
	desc?: string;
	completed?: boolean;
};

@Component({
	templateUrl: './todo-page.component.html'
})
export class TodoPageComponent {
	todos: Todo[] = [
		{ icon: '⭐', desc: 'Add component for YouTube embeds' },
		{ icon: '⭐', desc: 'create link component and use tailwind inside instead of using an apply in scss file.' },
		{ icon: '⭐', desc: 'Add component for article layouts? or use library layouts to figure that out.' },
		{ icon: '🐣', desc: 'Sort tags on posts...' },
		{ icon: '😩', desc: 'Fix up the GMT issue on dates.' },
		{ icon: '😍', desc: 'Create a fix for Tringlify lib for @Typed library.' },
		{ icon: '🤔', desc: 'Add a check for "back" button on blog posts so users don\'t go back to search engine but back to "/posts" if they came from google or whatever.' },
		{ icon: '🏅', desc: 'Add details to changelog.md about history of project' },
		{ icon: '🏅', desc: 'Add testing framework that svelte suggests' },
		{ icon: '🤦', desc: 'Maybe track todo\'s in a single location rather than spread between here and Obsidian' },
		{ icon: '📄', desc: 'Fix metadata for posts', completed: true },
		{ icon: '📄', desc: 'Add metadata for posts', completed: true },
		{ icon: '📄', desc: 'Rename Blog to Posts', completed: true },
		{ icon: '📄', desc: 'Remove "Paging" for now', completed: true },
	];
}
