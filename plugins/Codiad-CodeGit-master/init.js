	//////////////////////////////////////////////////////////////////////
	// CodeGit
	//////////////////////////////////////////////////////////////////////
	// Notes: 
	// I recall there being a security concern issue on teh github issues page
	// for this plugin as well as a call to action to utilize a different
	// backend. I'd like to ensure this plugin is reaching its full potential
	// but there is a huge and still growing ToDo list. 
	//
	// What this means is that I'm going to remove some features that I don't 
	// see as entirely useful / are overly complex, and instead try to focus
	// on simplifying this plugin as much as possible and as performant as 
	// possible.
	//
	// One thing I noticed is that I don't think many of the templates are
	// needed, and the GitPlugin can be made to mostly operate from the
	// overview, and the entire plugin might be able to be made on a state
	// based system, currently it doesn't store anything it needs until it
	// needs to and then it scrambles to do get teh infomation.
	//
	//												- Liam Siira
	//////////////////////////////////////////////////////////////////////


							// } else if (item.type == 'directory') {
							// if (result.status) {
							// $('[data-path="' + item.path + '"]').addClass('repo');
							// }
			if (!path || !repo) return;

			var element = `<tr>
							<td>
							<input type="checkbox" class="large" data-line="${line}">
							</td>
							<td class="' + status.toLowerCase() + '">${status}</td>
							<td data-line="${line}" class="file">${name}</td>
							<td>
							<button class="git_button git_diff" data-line="${line}">Diff</button>
							<button class="git_button git_undo" data-line="${line}">Undo</button>
							</td>
							</tr>`;
			// What the fuck?