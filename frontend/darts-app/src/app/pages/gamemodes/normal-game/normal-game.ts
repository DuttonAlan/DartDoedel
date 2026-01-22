import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../../../state/app-state.service';
import { MatButtonModule } from '@angular/material/button';
import { PlayerStatDisplay } from "../../../base-components/player-stat-display/player-stat-display";
import { Subject, takeUntil } from 'rxjs';
import { GameSettings, defaultSettings } from '../../../interfaces/game-settings';
import { GameInfos } from "../../../base-components/game-infos/game-infos";

@Component({
  selector: 'app-normal-game',
  imports: [MatButtonModule, PlayerStatDisplay, GameInfos],
  templateUrl: './normal-game.html',
  styleUrl: './normal-game.scss',
})
export class NormalGame implements OnInit {
  private router = inject(Router);
  private appStateService = inject(AppStateService);

  private destroy$ = new Subject<void>();
    
  settings: GameSettings = defaultSettings;

  ngOnInit(): void {
    this.appStateService
      .getAsObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.settings = state.currentSettings;
      });
  }

  ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
  
  public navigateToHomepage(): void {
    this.router.navigate(['/game-settings'])
  }
}
