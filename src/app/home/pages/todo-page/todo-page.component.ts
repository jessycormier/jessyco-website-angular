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
		{ icon: '😍', desc: 'Create a fix for Tringlify lib for @Typed library.' },
		{ icon: '🤦', desc: 'Maybe track todo\'s in a single location rather than spread between here and Obsidian' },
		{ icon: '📄', desc: 'Add SEO for website', completed: false },
	];
}
